import {NavigationActions} from 'react-navigation';

let navigator;

//clever function
//nav-> Bu, iki farklı ekranda gezinmemize izin verecek olan react navigation'dan gelen şey
export const setNavigator = (nav) => {
    navigator = nav;
};

//routeName-> gitmek istediğimiz rotanın adı
//params->göstermek üzere olduğumuz bazı bilgileri ekrana aktarmak için
//action göndererek, React Navigation'a status'ini değiştirmesini ve kullanıcılara farklı bir ekran göstermesini istediğimizi söylüyoruz
//that's going to trigger a change in state in react navigation and show some different content to our user
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};