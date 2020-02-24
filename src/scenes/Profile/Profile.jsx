import React, { useEffect } from 'react';
import s from './Profile.module.scss';
import { viewerOperations } from '../../modules/viewer';
import { connect } from 'react-redux';
import ProfileView from './ProfileView';
import { Spiner } from '../../components/index';

const mapStateToProps = (state) => {
  console.log("At", state);
  return {
    viewer: state.viewer.user,
  }
};

const mapDispatchToProps = {
  fetchViewer: viewerOperations.fetchViewer,
};



function Profile({fetchViewer, viewer}) {
  const getViewer =  async () => await fetchViewer();
  const setViewer =  async (data) => await setViewer(data);

  useEffect(() => {
    !viewer && getViewer();
  }, [viewer]);



  if (!viewer) {
    return <Spiner /> ;
  }

  return(
    <ProfileView viewer={viewer} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
