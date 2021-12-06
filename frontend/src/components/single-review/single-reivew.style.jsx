import styled from "styled-components";

export const SingleReviewContainer = styled.div`
  background-color: #dae3ea;
  padding: 2rem 3rem;
  border-radius: 2px;
`;

export const AvatarContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 50%;
`;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: auto;
  height: 100%;
`;

export const AvatarName = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0;
  margin-left: 1rem;
`;

export const ReviewText = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.3rem;
  color: #4f4f4f;
  padding-bottom: 1rem;
`;
