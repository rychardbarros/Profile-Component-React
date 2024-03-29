import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 4px 4px 16px -8px rgba(0, 0, 0, 0.25);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    width: fit-content;
`;

export const UserImg = styled.img`
    border-radius: 100%;
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.5);
    margin: 2rem 0 1rem;
`;

export const UserName = styled.h2`
    margin: 1rem;
`;

export const UserBio = styled.div`
    border-top: solid 1px rgb(66, 140, 209);
    padding: 1rem 2.5rem;

`;

export const UserPhone = styled.div`
    border-top: solid 1px rgb(66, 140, 209);
    padding: 1rem 2.5rem;
`;

export const UserEmail = styled.div`
    border-top: solid 1px rgb(66, 140, 209);
    padding: 1rem 2.5rem;
    border-bottom: solid 1px rgb(66, 140, 209);
`;

export const ContentButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 0.75rem;
`;

export const Button = styled.a`
    background: rgb(66, 140, 209);
    background: linear-gradient(45deg, rgb(30, 112, 189) 10%, rgb(124, 212, 235) 100%);
    border-radius: .75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-weight: 700;
    padding: .625rem;
    position: relative;
    bottom: 0;
    text-decoration: none;
    transition: .2s;
    width: 10rem;

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
        bottom: .25rem;
    }
`;
