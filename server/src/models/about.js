import mongoose from 'mongoose';

const {Schema} = mongoose;

/**
 * ABOUT SCHEMA
 * title {string} 제목
 * body {string} 제목
 * publishedDate {date} 작성 날짜
 * */

const AboutSchema = new Schema({
  title        : String,
  body         : String,
  publishedDate: {
    type   : Date,
    default: Date.now // 현재 날짜를 기본값
  },
  user         : {
    _id     : mongoose.Types.ObjectId,
    username: String
  }
});

const About = mongoose.model('About', AboutSchema);
export default About;