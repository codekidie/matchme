const listData = [{
  id: 1,
  brand: 'Night',
  title: 'Inline Push Ups',
  subtitle: 'Burns Fat',
  price: 'Easy',
  badge: 'NEW',
  badgeColor: '#3cd39f',
  image: 'https://yurielkaim.com/wp-content/uploads/2013/07/Advanced-Push-up-Variations-Diamond-Push-up.jpg',
}, {
  id: 2,
  brand: 'Morning',
  title: 'Knee Push Ups',
  subtitle: 'Strengthens Muscles',
  price: 'Easy',
  priceFrom: true,
  image: 'https://media.self.com/photos/57d88c8f24fe9dae3283160a/4:3/w_728,c_limit/popsugar-knee-driver.jpg',
}, {
  id: 3,
  brand: 'Morning',
  title: 'Planking',
  subtitle: 'Burns Belly Fat',
  price: 'Hard',
  priceFrom: true,
  badge: 'Featured',
  badgeColor: '#ee1f78',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C-W729ue5U7xqpDgNsAXntZ3VKn3jqJdY8rkNu-slyQBUwCP',
}, {
  id: 4,
  brand: 'Afternoon',
  title: 'Forward Bend',
  subtitle: 'Burns Fat',
  price: 'Easy',
  badge: 'NEW',
  badgeColor: 'green',
  image: 'https://www.yogaclassplan.com/wp-content/uploads/2017/08/Standing-Forward-Bend.jpg',
}, {
  id: 5,
  brand: 'Morning',
  title: 'Seated Wide Leg',
  subtitle: 'Enhances Blood Circulation',
  price: 'Easy',
  priceFrom: true,
  image: 'https://cdn6.omidoo.com/sites/default/files/imagecache/full_width/images/bydate/nov_12_2011_-_935pm/shutterstock_83973148.jpg',
}, {
  id: 6,
  brand: 'Morning',
  title: 'Hand Stand Push',
  subtitle: ' Burns Fat',
  price: 'Hard',
  priceFrom: true,
  badge: 'Featured',
  badgeColor: 'red',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUqU0dn_5ZtOdSq4F1MhSab6Sn5tYO60BKfub2ZplutdlJk2S',
},
{
  id: 7,
  brand: 'Morning',
  title: 'Jumping Jack',
  subtitle: ' Good Blood Circulation',
  price: 'Easy',
  badge: 'NEW',
  badgeColor: '#3cd39f',
  image: 'https://kaboutjie.com/wp-content/uploads/2018/07/jumping-jacks.png',
}, {
  id: 8,
  brand: 'Morning',
  title: 'Weight Lifting',
  subtitle: '6 pack abs',
  price: 'Hard',
  priceFrom: true,
  image: 'https://static1.squarespace.com/static/56e2509e4c2f8593e0139a9d/t/58ee9237e58c6290e6e43875/1492030026052/image8.jpeg',
}, {
  id: 9,
  brand: 'Morning',
  title: 'Sit Ups',
  subtitle: 'Remove Belly Fats',
  price: 'Easy',
  priceFrom: true,
  badge: 'Featured',
  badgeColor: '#ee1f78',
  image: 'http://befitnesstraining.co.za/wp-content/uploads/2017/07/crunch-.jpg',
}];

// Initial state
const initialState = {
  tabIndex: 0,
  tabs: ['Grid', 'List 1', 'List 2'],
  loading: false,
  data: [],
};

// Actions
const SWITCH_TAB = 'GridState/SWITCH_TAB';
const START_DATA_LOADING = 'GridState/START_DATA_LOADING';
const DATA_LOADED = 'GridState/DATA_LOADED';

// Action creators
function switchGridTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index,
  };
}

function startDataLoading() {
  return {
    type: START_DATA_LOADING,
  };
}

function dataLoaded(data) {
  return {
    type: DATA_LOADED,
    data,
  };
}

export function switchTab(index) {
  return (dispatch) => {
    dispatch(switchGridTab(index));
  };
}

export function loadData() {
  return (dispatch) => {
    dispatch(startDataLoading());
    dispatch(dataLoaded(listData));
  };
}


// Reducer
export default function GridStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SWITCH_TAB:
      return Object.assign({}, state, {
        tabIndex: action.payload,
      });
    case START_DATA_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        loading: false,
        data: action.data,
      });
    default:
      return state;
  }
}
