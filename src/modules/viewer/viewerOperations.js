import * as actions from './viewerActions';
import Api from '../../api';

export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const res = await Api.Viewer.get();

      dispatch(actions.fetchViewer.success(res.data));
    } catch (err) {
      dispatch(actions.fetchViewer.error({ message: err.message}),);
    }
  };
}

export function setViewer(data) {
  return async function setViewerThunk(dispatch) {
    try {
      dispatch(actions.setViewer.start());

      const res = await Api.Viewer.set(data);

      dispatch(actions.setViewer.success());
    } catch (err) {
      dispatch(actions.setViewer.error({ message: err.message}),);
    }
  };
}