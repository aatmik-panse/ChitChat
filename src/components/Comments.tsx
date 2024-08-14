import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import useStore from "../hooks/store";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

type FormValues = {
  name: string;
  text: string;
};

const Comments: React.FC = () => {
  const { comments, addComment, deleteComment, editComment } = useStore();
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<boolean>(true);

  const handleAddComment: SubmitHandler<FormValues> = ({ name, text }) => {
    const newComment = {
      id: Date.now().toString(),
      name,
      text,
      date: new Date().toISOString(),
      parentId: null,
    };

    addComment(newComment);
  };

  const handleReply: SubmitHandler<FormValues> = ({ name, text }) => {
    if (replyingTo) {
      const newComment = {
        id: Date.now().toString(),
        name,
        text,
        date: new Date().toISOString(),
        parentId: replyingTo,
      };

      addComment(newComment);
      setReplyingTo(null);
    }
  };

  const handleEditComment: SubmitHandler<FormValues> = ({ text }) => {
    if (editingCommentId) {
      editComment(editingCommentId, text);
      setEditingCommentId(null);
    }
  };

  const CommentForm = ({
    type = "Comment",
    onSubmit,
    defaultValues = { name: "", text: "" },
    isEditMode = false,
  }: {
    type: string;
    onSubmit: SubmitHandler<FormValues>;
    defaultValues?: FormValues;
    isEditMode?: boolean;
  }) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FormValues>({ defaultValues });

    const onSubmitForm = (data: FormValues) => {
      onSubmit(data);
      if (!isEditMode) reset();
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="m-2 p-4 bg-white border rounded-md shadow-sm"
      >
        {!isEditMode && <h2 className="text-lg font-semibold mb-2">{type}</h2>}
        {!isEditMode && (
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="w-full p-2 mb-2 bg-gray-100 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        {errors.name && <span className="text-red-500">Name is required</span>}
        <textarea
          {...register("text", { required: true })}
          placeholder="Comment"
          className="w-full p-2 mb-2 bg-gray-100 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.text && (
          <span className="text-red-500">Comment is required</span>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-2/6 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            {isEditMode ? "Save" : "Post"}
          </button>
        </div>
      </form>
    );
  };

  const Comment = ({
    comment,
    children,
  }: {
    comment: {
      id: string;
      name: string;
      text: string;
      date: string;
      parentId: string;
    };
    children?: React.ReactNode;
  }) => (
    <div
      className={`relative my-2 p-4 bg-gray-50 border rounded-md ${
        comment.parentId ? "ml-6" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <strong>{comment.name}</strong>
          <span className="text-sm text-gray-500 ml-2">
            {new Date(comment.date).toLocaleString()}
          </span>
        </div>
        <button
          className="absolute top-1/2 right-[-12.5px] transform -translate-y-1/2 text-sm text-blue-500 hover:underline"
          onClick={() => deleteComment(comment.id)}
        >
          <MdDelete size={24} color="black" />
        </button>
      </div>
      {editingCommentId === comment.id ? (
        <CommentForm
          type="Edit Comment"
          onSubmit={handleEditComment}
          defaultValues={{ name: comment.name, text: comment.text }}
          isEditMode
        />
      ) : (
        <>
          <p className="my-2">{comment.text}</p>
          <div className="flex space-x-2">
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={() => setEditingCommentId(comment.id)}
            >
              Edit
            </button>
            {!comment.parentId && (
              <button
                className="text-sm text-blue-500 hover:underline"
                onClick={() => setReplyingTo(comment.id)}
              >
                Reply
              </button>
            )}
          </div>
        </>
      )}
      {children}
    </div>
  );

  const renderComments = (parentId: string | null) =>
    comments
      .filter((comment) => comment.parentId === parentId)
      .sort((a, b) =>
        sortBy
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime()
      )
      .map((comment) => (
        <Comment
          key={comment.id}
          comment={{ ...comment, parentId: comment.parentId || "" }}
        >
          {renderComments(comment.id)}
          {replyingTo === comment.id && (
            <CommentForm
              type="Reply"
              onSubmit={handleReply}
              defaultValues={{ name: "", text: "" }}
            />
          )}
        </Comment>
      ));

  return (
    <div className="w-1/2 mx-auto my-8">
      <CommentForm
        type="Add Comment"
        onSubmit={handleAddComment}
        defaultValues={{ name: "", text: "" }}
      />
      <div className="border-b my-4 flex flex-row align-middle justify-between">
        <h2 className="text-lg font-semibold mt-4">Comments</h2>
        <button
          onClick={() => setSortBy(!sortBy)}
          className="flex flex-row align-middle"
        >
          Sort By: Date and Time{" "}
          {sortBy ? (
            <FaLongArrowAltUp size={20} />
          ) : (
            <FaLongArrowAltDown size={20} />
          )}
        </button>
      </div>
      <div className="mt-4 space-y-4">{renderComments(null)}</div>
    </div>
  );
};

export default Comments;
