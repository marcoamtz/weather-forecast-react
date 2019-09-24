import { toast } from 'react-toastify';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayOfWeek = dayNumber => {
  return DAYS_OF_WEEK[dayNumber];
};

const findCommonTempValues = items => {
  let { temp_min: minTemp, temp_max: maxTemp, icon } = items[0];
  let iconCounts = {};
  let maxCount = 0;

  items.forEach(item => {
    let { temp_min: min, temp_max: max, icon: iconCode } = item;

    minTemp = min < minTemp ? min : minTemp;
    maxTemp = max > maxTemp ? max : maxTemp;

    if (!iconCounts[iconCode]) {
      iconCounts[iconCode] = 1;
    } else {
      iconCounts[iconCode]++;
    }

    if (iconCounts[iconCode] > maxCount) {
      maxCount = iconCounts[iconCode];
      icon = iconCode;
    }
  });

  return { minTemp, maxTemp, icon };
};

export const handleApiErrors = response => {
  if (!response.ok) {
    toast.error(response.statusText);
  }
  return response;
};

export const groupByDay = daylist => {
  const groupList = daylist.reduce((groupList, item) => {
    const { main, weather } = item;
    const { temp_min, temp_max } = main;

    const date = new Date(item.dt_txt);
    const dayOfWeek = getDayOfWeek(date.getDay());

    const newItem = { temp_min, temp_max, icon: weather[0].icon };

    if (!groupList[dayOfWeek]) {
      groupList[dayOfWeek] = [];
    }
    groupList[dayOfWeek].push(newItem);

    return groupList;
  }, {});

  return groupList;
};

export const filterDayGroups = dayList => {
  const filteredDays = Object.keys(dayList).map(day => {
    const dayItems = dayList[day];

    const { minTemp, maxTemp, icon } = findCommonTempValues(dayItems);

    return { day, minTemp, maxTemp, icon };
  });

  if (filteredDays.length > 5) {
    filteredDays.pop();
  }

  return filteredDays;
};
