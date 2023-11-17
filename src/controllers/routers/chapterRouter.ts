import express from 'express'
import {
  addChapterValidator,
  updateChapterValidator,
  chapterValidator,
} from '../middlewares/validators/chapterValidator'
import ScriptChapters from '../ChapterController'
import { authMiddleware } from '../middlewares/jwtHandler'

export const router = express.Router()

router.post(
  '/create-chapter',
  authMiddleware,
  addChapterValidator,
  ScriptChapters.createNewChapter,
)

router.put(
  '/update-chapter/:script_id',
  authMiddleware,
  updateChapterValidator,
  ScriptChapters.updateChapterDetails,
)

router.delete(
  '/delete-chapter/:script_id',
  authMiddleware,
  chapterValidator,
  ScriptChapters.deleteScriptChapter,
)

router.get(
  '/fetch-chapter/:script_id',
  authMiddleware,
  chapterValidator,
  ScriptChapters.getChapter,
)

router.get(
  '/all-chapters/:script_id',
  authMiddleware,
  chapterValidator,
  ScriptChapters.getAllChaptersInScript,
)
