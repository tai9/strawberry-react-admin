import useDashboard from './useDashboard';
import useApplication from './useApplication';
import usePages from './usePages';
import useUtilities from './useUtilities';
import useOther from './useOther';
import useForms from './useForms';
import useWidget from './useWidget';

//-----------------------|| MENU ITEMS ||-----------------------//

const useIndex = () => {
    const { dashboard } = useDashboard();
    const { widget } = useWidget();
    const { application } = useApplication();
    const { forms } = useForms();
    const { pages } = usePages();
    const { utilities } = useUtilities();
    const { other } = useOther();

    const menuItems = {
        items: [dashboard, widget, application, forms, pages, utilities, other]
    };
    return { menuItems };
};

export default useIndex;
