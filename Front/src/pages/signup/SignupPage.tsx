import React, { useState } from "react";
import L from "../login/LoginStyle";
import DefaultInputField from "../../components/inputfield/InputField";
import DefaultButton from "../../components/button/DefaultButton";
import VerticalDivider from "../../components/divider/VerticalDivider";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Submit form logic here
    console.log({ name, email, username, password, confirmPassword });
  };

  return (
    <L.Body>
      <L.MainContainer>
        <L.Container_top>
          <h1 style={{ fontSize: "3em" }}>회원가입</h1>
        </L.Container_top>
        <L.Container_bottom>
          <L.P_tag>회원정보를 모두 입력하세요.</L.P_tag>
          <form onSubmit={handleSubmit}>
            <DefaultInputField
              type="text"
              id="name"
              placeholder="회원 이름 (홍길동)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <DefaultInputField
              type="email"
              id="email"
              placeholder="회원 이메일 (fintech@gmail.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <DefaultInputField
              type="text"
              id="username"
              placeholder="회원 ID (fintech123)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <DefaultInputField
              type="password"
              id="password"
              placeholder="비밀번호 (123456)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <DefaultInputField
              type="password"
              id="confirm-password"
              placeholder="비밀번호 확인 (123456)"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <DefaultButton width="100%">Sign Up</DefaultButton>
          </form>
          <L.Divider>
            <span>또는</span>
          </L.Divider>
          <L.SNSLogin>
            <L.SNSButton id={"NaverLogin"} />
            <L.SNSButton id={"KakaoLogin"} />
            <L.SNSButton id={"GoogleLogin"} />
          </L.SNSLogin>
        </L.Container_bottom>
        <L.SignUp>
          <L.P_tag>
            <a href="/login">로그인 </a>
          </L.P_tag>
          <VerticalDivider height={"20px"} style={{ marginLeft: "20px" }} />
          <L.P_tag style={{ margin: "20px" }}>
            <a href="/intro">홈으로</a> 나가기
          </L.P_tag>
        </L.SignUp>
      </L.MainContainer>
    </L.Body>
  );
};

export default SignupPage;
