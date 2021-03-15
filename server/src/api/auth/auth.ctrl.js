import Joi from 'joi';
import User from '../../models/users.js';

/**
 * register 회원가입
 * POST /api/auth/register
 * {username: string, password: string}
 * */
export const register = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required()
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {username, password} = ctx.request.body;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409;
      return;
    }

    const user = new User({username});
    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * login 로그인
 * POST /api/auth/login
 * {username: string, password: string}
 * */
export const login = async ctx => {
  const {username, password} = ctx.request.body;

  if (!username || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();

  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * check 로그인 체크상태 확인
 * */
export const check = async ctx => {

};

/**
 * logout 로그아웃
 * */
export const logout = async ctx => {

};