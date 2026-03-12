import styled from "styled-components";

export const SectionOrders = styled.section`
  margin-top: 60px;

  h2 {
    color: #363949;
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .dark-theme & h2 {
    color: #f5f7ff;
  }

  @media (max-width: 576px) {
    margin-top: 32px;

    h2 {
      font-size: 22px;
      margin-bottom: 16px;
    }
  }
`;

export const OrdersCard = styled.div`
  background: #fff;
  border-radius: 32px;
  padding: 24px 32px;
  box-shadow: 0 32px 48px rgba(132, 139, 200, 0.18);
  overflow-x: auto;
  transition: all 0.3s ease;

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    min-width: 650px;
  }

  thead th {
    color: #363949;
    font-size: 16px;
    font-weight: 700;
    padding: 16px;
    white-space: nowrap;
  }

  tbody td {
    color: #7d8da1;
    padding: 16px;
    border-top: 1px solid #f0f0f5;
    font-size: 15px;
    white-space: nowrap;
  }

  tbody tr:hover {
    background-color: #f8f9ff;
  }

  .details {
    color: #6c9bcf;
    font-weight: 600;
    cursor: pointer;
  }

  .pending {
    color: #ffbb55;
    font-weight: 600;
  }

  .declined {
    color: #ff0060;
    font-weight: 600;
  }

  .active {
    color: #1b9c85;
    font-weight: 600;
  }

  &:hover {
    box-shadow: none;
  }

  .dark-theme & {
    background: #202528;
    box-shadow: none;
  }

  .dark-theme & thead th {
    color: #f5f7ff;
  }

  .dark-theme & tbody td {
    color: #cfd6e4;
    border-top: 1px solid #343a40;
  }

  .dark-theme & tbody tr:hover {
    background-color: #2a2f35;
  }

  .dark-theme & .details {
    color: #8ab4ff;
  }

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 18px 20px;
  }

  @media (max-width: 576px) {
    border-radius: 18px;
    padding: 14px 16px;

    thead th,
    tbody td {
      padding: 12px;
      font-size: 14px;
    }
  }
`;

export const ShowAll = styled.p`
  text-align: center;
  margin-top: 16px;
  color: #6c9bcf;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  .dark-theme & {
    color: #8ab4ff;
  }
`;