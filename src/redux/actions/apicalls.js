
import {
  AVATARS,
  GETUSER,
  NOTIFICATION,
  GETCATEGORIES,
  GETFEELINGS,
  TOPTHERAPIST,
  UPCOMINGSESSION,
  GETGROUPS,
  GETPODCAST,
  GETALLTHERAPIST,
  GETTHERAPISTBYID,
  GETTHERAPISTSLOT,
  THERAPISTREVIEW,
  GETPOST,
  GETPOSTBYID,
  GETARTICLES,
  GETARTICLESBYID,
  PASTSESSION,
  GETNOTIFICATION,
  GETPOSTBYUSERID,
  GETUSERBYID,
  GETSESSIONBYID,
  GETCHATBYUSERID,
  GETPOSTCOMMENT,
  GETALLSESSIONCHAT,
  GETSESSIONSTATUS,
  GETJOINEDGROUPS,
  GETGROUPCHATBYID,
  GETGROUPCHATHISTORY,
  GETGROUPMEMBERS,
  GETUSERCHATHISTORY,
  GETALLUSERCHAT,
  GETCALLDETAILS,
  GETONGOINGSPACE,
  GETSPACEBYID,
  UPCOMINGSPACE,
  GETSPACEPARTICIPANT,
} from "../../utils/config";
import { apiGet, apiPost, apiDelete, apiPut } from "../../utils/utils";


export function getuser(data = null) {
    return apiGet(GETUSER, data)
}

export function getcategories(data = null) {
  return apiGet(GETCATEGORIES, data);
}

export function notification(data = null) {
    return apiGet(NOTIFICATION, data)
}

export function getAvatars(data = null) {
  return apiGet(AVATARS, data);
}

export function getEmotions(data) {
  return apiGet(GETFEELINGS, data);
}

export function getTopTherapist(data) {
  return apiGet(TOPTHERAPIST, data);
}

export function getUpcomingSession(data) {
  return apiGet(UPCOMINGSESSION, data);
}

export function getPastSession(data) {
  return apiGet(PASTSESSION, data);
}

export function getPosts(data) {
  return apiGet(GETPOST, data);
}

export function getArticle(data) {
  return apiGet(GETARTICLES, data);
}

export function getArticleByID(data) {
  return apiGet(GETARTICLESBYID + data);
}

export function getGroups(data) {
  return apiGet(GETGROUPS, data);
}

export function getPodcast(data) {
  return apiGet(GETPODCAST, data);
}

export function getAllTherapist(data) {
  return apiGet(GETALLTHERAPIST, data);
}

export function getTherapistByID(data) {
  return apiGet(GETTHERAPISTBYID + data);
}

export function getPostByUserID(data) {
  return apiGet(GETPOSTBYUSERID + data);
}

export function getUserinfoByID(data) {
  return apiGet(GETUSERBYID + data);
}

export function getPostByID(data) {
  return apiGet(GETPOSTBYID + data);
}

export function getTimeSlots(data) {
  return apiGet(GETTHERAPISTSLOT + data);
}

export function getTherapistReviews(data) {
  return apiGet(THERAPISTREVIEW + data);
}

export function getNotification(data) {
  return apiGet(GETNOTIFICATION, data);
}

export function getSessionByID(data) {
  return apiGet(GETSESSIONBYID + data);
}

export function getSessionStatus(data) {
  return apiGet(GETSESSIONSTATUS + data);
}

export function getChatByUserID(data) {
  return apiGet(GETCHATBYUSERID + data);
}

export function getComments(data) {
  return apiGet(GETPOSTCOMMENT + data);
}

export function getAllChat(data) {
  return apiGet(GETALLSESSIONCHAT, data);
}

export function getJoinedGroups(data = null) {
  return apiGet(GETJOINEDGROUPS, data);
}

export function groupChatInfoBYid(data) {
  return apiGet(GETGROUPCHATBYID + data);
}

export function getGChatBackupByID(data) {
  return apiGet(GETGROUPCHATHISTORY + data);
}

export function getGroupMembers(data) {
  return apiGet(GETGROUPMEMBERS + data);
}

export function getUserChat(data) {
  return apiGet(GETUSERCHATHISTORY + data);
}

export function getAllUserChat(data) {
  return apiGet(GETALLUSERCHAT, data);
}

export function getsCallDetails(data) {
  return apiGet(GETCALLDETAILS + data);
}

export function happeningNow(data) {
  return apiGet(GETONGOINGSPACE, data);
}

export function GetSpaceDetails(data) {
  return apiGet(GETSPACEBYID + data);
}

export function getUpcomingSpace(data) {
  return apiGet(UPCOMINGSPACE, data);
}

export function getParticipants(data) {
  return apiGet(GETSPACEPARTICIPANT + data);
}
export function updateProfilePicture(data) {
    return apiPost(PROFILEPICTURE, data,
        {
            'Content-Type': 'multipart/form-data',
            Accept: "multipart/form-data"
        }
    )
}