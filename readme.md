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