package com.stackroute.keepnote.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Notes {

	private int noteId;
	private String noteTitle;
	private String noteContent;
	private String noteStatus;
	private Date noteCreationDate;
	private String noteCreatedBy;

	public Notes() {
	}

	public Notes(int noteId, String noteTitle, String noteContent, String noteStatus, Date noteCreationDate,
			String noteCreatedBy) {
		super();
		this.noteId = noteId;
		this.noteTitle = noteTitle;
		this.noteContent = noteContent;
		this.noteStatus = noteStatus;
		this.noteCreationDate = noteCreationDate;
		this.noteCreatedBy = noteCreatedBy;
	}

	public int getNoteId() {
		return noteId;
	}

	public void setNoteId(int noteId) {
		this.noteId = noteId;
	}

	public String getNoteTitle() {
		return noteTitle;
	}

	public void setNoteTitle(String noteTitle) {
		this.noteTitle = noteTitle;
	}

	public String getNoteContent() {
		return noteContent;
	}

	public void setNoteContent(String noteContent) {
		this.noteContent = noteContent;
	}

	public String getNoteStatus() {
		return noteStatus;
	}

	public void setNoteStatus(String noteStatus) {
		this.noteStatus = noteStatus;
	}

	public Date getNoteCreationDate() {
		return noteCreationDate;
	}

	public void setNoteCreationDate(Date noteCreationDate) {
		this.noteCreationDate = noteCreationDate;
	}

	public String getNoteCreatedBy() {
		return noteCreatedBy;
	}

	public void setNoteCreatedBy(String noteCreatedBy) {
		this.noteCreatedBy = noteCreatedBy;
	}

	@Override
	public String toString() {
		return "Notes [noteId=" + noteId + ", noteTitle=" + noteTitle + ", noteContent=" + noteContent + ", noteStatus="
				+ noteStatus + ", noteCreationDate=" + noteCreationDate + ", noteCreatedBy=" + noteCreatedBy + "]";
	}

}