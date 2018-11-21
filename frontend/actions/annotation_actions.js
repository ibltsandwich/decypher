import * as AnnotationApiUtil from '../util/annotation_api_util'

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';

export const receiveAnnotation = payload => {
  return {
    type: RECEIVE_ANNOTATION,
    payload
  }
}

export const fetchAnnotation = annotation => dispatch => {
  return AnnotationApiUtil.fetchAnnotation(annotation).then(
    response => dispatch(receiveAnnotation(response))
  )
}

export const createAnnotation = annotation => dispatch => {
  return AnnotationApiUtil.createAnnotation(annotation).then(
    response => dispatch(receiveAnnotation(response))
  )
}

export const updateAnnotation = annotation => dispatch => {
  return AnnotationApiUtil.createAnnotation(annotation).then(
    response => dispatch(receiveAnnotation(response))
  )
}