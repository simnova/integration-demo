import { useAuth } from 'react-oidc-context';

export const Profile: React.FC<any> = (_props) => {
    const auth = useAuth();

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        
        return (
        <div>

            Hello
            {auth.user?.profile ? <div>
                <div>Sub: {auth.user.profile.sub}</div>
                <div>Email: {auth.user.profile.email}</div>
                <div>Email Verified: {auth.user.profile.email_verified ? "Yes" : "No"}</div>
                <div>Name: {auth.user.profile.name}</div>
                <div>Picture: <img src={auth.user.profile.picture} alt='profile' /></div>
                <div>Given Name: {auth.user.profile.given_name}</div>
                <div>Family Name: {auth.user.profile.family_name}</div>
                <div>Locale: {auth.user.profile.locale}</div>

            </div>
            : <div>Nothing</div>}

            <button onClick={() => void auth.removeUser()}>Log out</button>
        </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in22</button>;

};
