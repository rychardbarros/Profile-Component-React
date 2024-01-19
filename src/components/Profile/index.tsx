import * as S from './styles';


interface ProfileProps {
    img: string,
    name: string,
    bio: string,
    email: string,
    phone: string,
    githubUrl: string,
    linkedinUrl: string,
    twitterUrl: string,

}

export const Profile = (props: ProfileProps) => {
    return (
        <S.Container>
            <S.UserImg src={props.img} alt="user_img" />
            <S.UserName>{props.name}</S.UserName>
            <S.UserBio>{props.bio}</S.UserBio>
            <S.UserPhone>{props.phone}</S.UserPhone>
            <S.UserEmail>{props.email}</S.UserEmail>

            <S.ContentButton>    
                <S.Button href={props.githubUrl} target="_blank">GitHub</S.Button>
                <S.Button href={props.linkedinUrl} target="_blank">linkedin</S.Button>
                <S.Button href={props.twitterUrl} target="_blank">X</S.Button>
            </S.ContentButton>
        </S.Container>
    );
};