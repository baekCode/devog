# devlog



## server 

- Koa 
- Koa-router 
- mongoDB



#### MongoDB 데이터베이스 스키마 구조

![devogScheme](/Users/baekcode/Documents/devogScheme.jpeg)



#### MongoDB install 

mac os brew install 

`brew update`

`brew install mongodb`

![스크린샷 2021-03-13 오전 10.45.30](/Users/baekcode/Desktop/스크린샷 2021-03-13 오전 10.45.30.png)

⁉️위와 같은 에러가 발생

`brew tap mongodb/brew`
`brew install mongodb-community@4.2`

다시 mongodb 를 실행해도 에러가 난다. 

mongoDB 에서 db를 저장할 경로를 만들어야 한다.

`sudo mkdir -p /Users/[username]/data/db`

[username] 은 `whoami` 명령어를 사용한다.

![스크린샷 2021-03-13 오전 10.56.01](/Users/baekcode/Desktop/스크린샷 2021-03-13 오전 10.56.01.png)

![스크린샷 2021-03-13 오전 10.56.28](/Users/baekcode/Desktop/스크린샷 2021-03-13 오전 10.56.28.png)

![스크린샷 2021-03-13 오전 10.56.55](/Users/baekcode/Desktop/스크린샷 2021-03-13 오전 10.56.55.png)



`brew doctor` 를 실행해서 경고를 하나씩 처리한다.

- 업데이트 권고
- node 를 brew 커맨드로 설치 안해서 나오는 경고들..

rm -rf node 설치가 된 경로 

-----

위와 같은 삽질을 경험함 

1. brew doctor 경고 처리 
2. xcode-select --install
3. brew tap mongodb/brew
4. brew install mongodb-community@4.4
5. mongod --config /usr/local/etc/mongod.conf
6. 해결 완료!

![스크린샷 2021-03-13 오전 11.59.29](/Users/baekcode/Desktop/스크린샷 2021-03-13 오전 11.59.29.png)

참고 레퍼런스 https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition



`brew services start mongodb/brew/mongodb-community` : mongoDB start

`brew services stop mongodb/brew/mongodb-community` : mongoDB stop

`mongo` : mongoDB 접속



-----

#### node 환경에서 es module 사용하기

node 12 버전 이상부터는 package.json 에서 type : module 을 설정하면 node 에서도 import/export module 사용이 가능하다.

 ![스크린샷 2021-03-13 오후 10.02.32](/Users/baekcode/Desktop/스크린샷 2021-03-13 오후 10.02.32.png)



node 에서 import 할때 확장자 까지 써야 한다.

확장자를 사용하지 않았을때는 아래와 같이 에러표기

![스크린샷 2021-03-13 오후 10.03.37](/Users/baekcode/Desktop/스크린샷 2021-03-13 오후 10.03.37.png)

![스크린샷 2021-03-13 오후 10.04.27](/Users/baekcode/Desktop/스크린샷 2021-03-13 오후 10.04.27.png)



-----

#### Mongoose Model 

[참고하면 좋은 mongoose docs](https://mongoosejs.com/docs/documents.html)



##### Post Schema 

mongoos의 Shema 를 이용하여 POST 스키마 구조를 정의 한다.

```javascript
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
```





##### Post - POST 요청

request body 담긴 전송할 데이터를 new 키워드를 사용하여 Post에 담는다.

mongoose의 save() 메소드를 이용하여 저장한다. (save 메소드가 궁금하다면 mongoose docs 참고)

이후 body로 담긴내용을 내보내준다.

```javascript
/**
 * 포스트 작성
 * POST /api/posts
 * {title, body}
 * */
export const write = async ctx => {
  const {title, body, tags} = ctx.request.body;
  const post = new Post({title, body, tags});
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
```

![스크린샷 2021-03-14 오전 9.42.10](/Users/baekcode/Desktop/스크린샷 2021-03-14 오전 9.42.10.png)

(▲▲postman 으로 POST 요청한 화면_4번을 요청함)





![스크린샷 2021-03-14 오전 9.42.24](/Users/baekcode/Desktop/스크린샷 2021-03-14 오전 9.42.24.png)

(▲▲ 저장된 데이터 데이터_4번 요청한 데이터들)



##### Post - GET 요청 (Posts)

전체 포스트를 조회

```javascript
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
```



##### Post - GET 요청 (단일 Post)

하나의 특정 포스트를 조회 

```javascript
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
```



##### Post - DELETE 요청

DELETE 요청으로 데이터 삭제

findByIdAndRemove() 메소드를 사용하여 특정조건에 맞는 데이터를 하나 찾아서 삭제한다.

```javascript
/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 * */
export const remove = async ctx => {
  const {id} = ctx.params;
  try{
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};
```