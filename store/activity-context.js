import { createContext, useState } from "react";
export const ActivityContext = createContext({
    activities: [],
    filterActivities: (answer) => {},
    doneActivity: (activities, id) => {}
});
function ActivityContextProvider({ children })
{
    const meet = [{
        title: 'Meet with People',
        img: '/assets/logo/meet.jpeg',
        desc: 'Meeting new people can reduce isolation, boost self-esteem, mindfulness and a more positive outlook.',
        id: 1
    }];
    const music = [{
        title: 'Listen to music',
        img: '/assets/logo/music.jpg',
        desc: 'Listening to music can provide an avenue for emotional expression and release, offering a sense of comfort and relaxation,facilitating a sense of connection by resonating with emotions, memories, or experiences conveyed in the music.',
        id: 2
    }];
    const job = [{
        title: 'Get a job',
        img: '/assets/logo/write.jpeg',
        desc: 'Getting a job can help you in diverting your attention from negative thoughts, reducing rumination, and preventing feelings of boredom or stagnation. It fosters a sense of accomplishment and purpose, enhancing self-esteem and confidence.',
        id: 3
    }];
    const [activity, setActivity] = useState([]);

    function filterActivities(answer)
    {
        console.log(answer[2]);
        if(answer[0]==0 || answer[0]==1)
        {
            setActivity(activity, ...meet);
            console.log(activity);
        }
        if(answer[1]==0 || answer[1]==1)
        {
            setActivity((prevActivity)=>[prevActivity, ...music]);
            console.log(activity);
        }
        if(answer[2]==0 || answer[2]==1)
        {
            
            setActivity((prevActivity)=>[prevActivity, ...music]);
            console.log(activity);
        }
    }

    const values ={
        activities: activity,
        filterActivities: filterActivities
    }

    return <ActivityContext.Provider value={values}>
        {children}
    </ActivityContext.Provider>
}
export default ActivityContextProvider;
