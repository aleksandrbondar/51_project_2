import styled from 'styled-components'

export const ProductWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  flex-grow: 1;
`;

export const IdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 400px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.5rem;
`;

export const ProductDescription = styled.p`
padding: 16px 0;
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: black;
  flex-grow: 1;
`;

export const ProductId = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #999;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
`;

export const ProductCategory = styled.p`

  margin: 0;
  font-size: 1rem;
  color: grey;
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid black;
  margin: 16px 0 0 0;
`;