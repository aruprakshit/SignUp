import { combineReducers } from 'redux';
import { paints } from './paints';
import { rooms } from './rooms';
import { electricals } from './electricals';
import { countertops } from './countertops';
import { edgeProfiles } from './edge_profiles';
import { materialColors } from './material_colors';

export default combineReducers({
  paints,
  rooms,
  electricals,
  countertops,
  edgeProfiles,
  materialColors
});
