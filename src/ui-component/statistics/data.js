import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ThumbDownAltTwoToneIcon from '@material-ui/icons/ThumbDownAltTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import { deepPurple, green, pink, lightBlue, orange } from '@material-ui/core/colors';

export const boxOne = [
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

export const boxThere = [
    {
        id: 1,
        title: 'Visitors',
        data: '6035',
        img: <AccountCircleTwoToneIcon fontSize="small" style={{ color: deepPurple[500] }} />
    },
    {
        id: 2,
        title: 'Invoices',
        data: '19',
        img: <DescriptionTwoToneIcon fontSize="small" style={{ color: pink[500] }} />
    },
    {
        id: 3,
        title: 'Issues',
        data: '63',
        img: <BugReportTwoToneIcon fontSize="small" style={{ color: orange[500] }} />
    },
    {
        id: 4,
        title: 'Projects',
        data: '95%',
        img: <FolderOpenTwoToneIcon fontSize="small" style={{ color: green[500] }} />
    }
];
