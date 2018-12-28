import client from '../utils/fetch'

export function addApplicationRequest(bundleId, icon, name, desc) {
  const data = {
    bundle_id:bundleId,
    icon,
    name,
    desc
  }
  return client({
    url: '/app/add',
    method: 'post',
    data
  })
}


