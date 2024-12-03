const today=new Date();

function DateTimeFormat(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday:'long'}
    ).format(date);
}


export default function TodayApp(){
    return(
        <h5>To day is: {DateTimeFormat(today)}</h5>
    );
}

