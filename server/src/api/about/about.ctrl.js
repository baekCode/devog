import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';
import About from '../../models/about.js';

const sanitizeOption = {
  allowedTags      : [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a  : ['href', 'name', 'target'],
    img: ['src'],
    li : ['class'],
  },
  allowedSchemes   : ['data', 'http'],
};

/**
 * 작성
 * POST /api/about
 * {title, body}
 * */
export const write = async ctx => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body : Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {title, body} = ctx.request.body;
  const about = new About({title, body: sanitizeHtml(body, sanitizeOption), user: ctx.state.user});
  try {
    await about.save();
    ctx.body = about;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 조회
 * GET /api/about
 * */
export const read = async ctx => {
  try {
    const about = await About.findOne();
    ctx.body = about;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 특정 포스트 제거
 * DELETE /api/about/:id
 * */
export const remove = async ctx => {
  const {id} = ctx.params;
  try {
    await About.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 수정(특정 필드 변경)
 * PATCH /api/about/
 * {title, body}
 * */
export const update = async ctx => {

  const schema = Joi.object().keys({
    title: Joi.string(),
    body : Joi.string(),
  });

  const result = schema.validate(ctx.request.body);

  console.log('[ctx.request.body] %s', ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const nextData = {...ctx.request.body};
  if (nextData.body) {
    nextData.body = sanitizeHtml(nextData.body);
  }
  try {
    const about = await About.findOneAndUpdate(nextData, {
      new: true,
    }).exec();
    console.log('about %s', about);
    if (!about) {
      ctx.status = 404;
      return;
    }
    ctx.body = about;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const checkOwnAbout = (ctx, next) => {
  const {user, about} = ctx.state;
  if (about.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};