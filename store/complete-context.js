import { createContext, useState } from "react";
export const CompleteContext = createContext({
    complete: [],
    addComplete: ()=>{},
    removeComplete: ()=>{}
});

function CompleteContextProvider({children})
{
    const [comp, setComp] = useState([]);
    function addComplete(id, title)
    {
        const temp = [
            {
                id: id,
                title: title
            }
        ];
        setComp([...comp, ...temp]);
    }
    const values = {
        complete: comp,
        addComplete: addComplete
    }

    return <CompleteContext.Provider value={values}>
        {children}
    </CompleteContext.Provider>
}

export default CompleteContextProvider;