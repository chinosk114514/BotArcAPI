const TAG: string = 'arcapi.login.ts';

import arcfetch, { ArcFetchRequest, ArcFetchMethod } from './arcfetch';

export default (name: string, password: string, deviceid: string): Promise<string> => {
  
  return new Promise((resolve, reject) => {

    // construct remote request
    const _remote_request =
      new ArcFetchRequest(ArcFetchMethod.POST, `auth/login`, {
        userName: name,
        userPasswd: password,
        deviceId: deviceid,
        submitData: new URLSearchParams({ 'grant_type': 'client_credentials' })
      });

    // send request
    arcfetch(_remote_request)
      .then((root) => { resolve(root.access_token); })
      .catch((e) => { reject(e); })

  });

}
