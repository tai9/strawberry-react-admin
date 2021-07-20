import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ThumbDownAltTwoToneIcon from '@material-ui/icons/ThumbDownAltTwoTone';
import { deepPurple, green, pink, lightBlue } from '@material-ui/core/colors';

export const box = [
    {
        id: 1,
        title: 'All Earnings',
        data: '$30200',
        img: <PollTwoToneIcon fontSize="large" style={{ color: deepPurple[500] }} />
    },
    {
        id: 2,
        title: 'Task',
        data: '145',
        img: <CalendarTodayTwoToneIcon fontSize="large" style={{ color: pink[500] }} />
    },
    {
        id: 3,
        title: 'Page Views',
        data: '290+',
        img: <DescriptionTwoToneIcon fontSize="large" style={{ color: green[500] }} />
    },
    {
        id: 4,
        title: 'Downloads',
        data: '500',
        img: <ThumbDownAltTwoToneIcon fontSize="large" style={{ color: lightBlue[500] }} />
    }
];
