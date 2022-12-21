/**
 * 타입스크립트서버에게 vue파일은 이렇게 설정되어있다라고 알려줘서
 * 타입추론 및 기능을 정상적으로 동작하기 위한 설정
 */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
