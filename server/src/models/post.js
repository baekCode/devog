import mongoose from 'mongoose';

const {Schema} = mongoose;

/**
 * POST SCHEMA
 * title {string} 제목
 * body {string} 제목
 * tags {string[]} 태그 목록
 * publishedDate {date} 작성 날짜
 * */

const PostSchema = new Schema({
  title        : String,
  body         : String,
  tags         : [String],
  publishedDate: {
    type   : Date,
    default: Date.now // 현재 날짜를 기본값
  }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;