import styled from "styled-components";
import Avatar from "./Avatar";

export default ({ avatarList }) => {
  return (
    <Container>
      {avatarList.map((avatar, idx) => (
        <Avatar img={avatar.img} selected={idx === 1} key={idx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
`;
