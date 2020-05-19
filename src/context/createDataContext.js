import React, {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {
    
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer,defaultValue);
    
        //boundActions-> state'i değiştirmek için kullandığımız fonksiyon
        const boundActions = {};
        //actions'lar ->dispatch'de çağırmamız gereken işlevler
        //react bu action objeyi alır ve otomatik olarak reducer'e gönderir
        //actions içindeki tüm farklı action'lar üzerinden geçeceğiz
        //actionsları anahtarlarız
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
            //bu yüzden iletilen bu farklı action functionsların her birine bak ve dispatch'i çağır
        }

        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
        //Bu->tüm verilerimizi altında oluşturulan tüm farklı bileşenler için kullanılabilir hale getiren gerçek underline react componentidir
        //value prop'u-> child componenetlerle paylaşılan bilgiler
    };

    return {Context, Provider};
    //Provider->  temel olarak tüm verilerimizi uygulamanın içindeki her şeye sunacak olan bileşenimizdir.
    //Context-> bu bilgiye alt bileşenlerimizden birinden erişmek için kullanacağımız bağlam nesnesidir.
};