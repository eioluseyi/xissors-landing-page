import styled from "styled-components";

export default ({ img, selected }) => (
  <AvatarElement src={img} selected={selected} />
);

const AvatarElement = styled.img`
  width: ${({ selected }) => (selected ? "6rem" : "4rem")};
  height: ${({ selected }) => (selected ? "6rem" : "4rem")};
  object-fit: cover;

  border-radius: 6rem;
`;
