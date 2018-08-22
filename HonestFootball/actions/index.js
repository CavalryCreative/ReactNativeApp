export const FETCH_TEAMS_BEGIN   = 'FETCH_TEAMS_BEGIN';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';

export function updateTeam(team){
	
	return {
		type: 'UPDATE_TEAM',
		team,
	}
}

export function rehydrateTeamName(team){
	return {
		type: 'REHYDRATE_TEAMNAME',
		team,
	}
}

export const fetchTeamsBegin = () => ({
  type: FETCH_TEAMS_BEGIN
});

export const fetchTeamsSuccess = teams => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: { teams }
});

export const fetchTeamsError = error => ({
  type: FETCH_TEAMS_ERROR,
  payload: { error }
});

export function fetchTeams() {
  
  return dispatch => {

    dispatch(fetchTeamsBegin());

    return fetch("http://honest-apps.eu-west-1.elasticbeanstalk.com/api/teams")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTeamsSuccess(json.Teams));

        return json.Teams;
      })
      .catch(
        error => dispatch(fetchTeamsError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
