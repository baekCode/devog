import Joi from 'joi';
import mongoose from 'mongoose';
import Post from '../../models/post.js';

const {ObjectId} = mongoose.Types;

/**
 * 포스트 작성
 * POST /api/posts
 * {title, body}
 * */
export const write = async ctx => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body : Joi.string().required(),
    tags : Joi.array().items(Joi.string()).required()
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {title, body, tags} = ctx.request.body;
  const post = new Post({title, body, tags});
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 조회
 * GET /api/posts
 * */
export const list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 특정 포스트 조회
 * GET /api/posts/:id
 * */
export const read = async ctx => {
  const {id} = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 * */
export const remove = async ctx => {
  const {id} = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 수정(특정 필드 변경)
 * PATCH /api/posts/:id
 * {title, body}
 * */
export const update = async ctx => {
  const {id} = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * ID 검증 - mongoose.Type ObjectId
 * */
export const checkObejctId = (ctx, next) => {
  const {id} = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};