import PartyPost from "@/types/PartyPost";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

interface PartyPostsListItemProps {
  post: PartyPost;
  selectionValue: boolean;
  onSelectionChange: (val: boolean) => void;
}

export default function PartyPostsListItem({
  post,
  selectionValue,
  onSelectionChange,
}: PartyPostsListItemProps) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={Boolean(selectionValue)}
          onChange={(e) => {
            onSelectionChange(e.target.checked);
          }}
        />
      </td>
      <td>{post.sport}</td>
      <td>5</td>
      <td>9</td>
      <td>{post.startTime.toString()}</td>
      <td>
        {" "}
        <button className="edit-btn">
          <BiEdit />
        </button>
        <button className="delete-btn">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}
