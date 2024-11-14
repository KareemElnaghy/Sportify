import React, { useEffect, useState } from "react";
import "./partypostslistStyle.css";
import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import PartyPost from "@/types/PartyPost";
import PartyPostsListItem from "./PartyPostsListitem";

interface PartyPostsListProps {
  pm: PMPartyPostsList;
}

export default function PartyPostsList({ pm }: PartyPostsListProps) {
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

  useEffect(() => {
    const isAllSelected =
      pm.currentSelection.filter(Boolean).length == pm.partyPostsList.length;

    setSelectAllCheckbox(isAllSelected);
  }, [pm.currentSelection]);

  const handleSelectAll = (e: any) => {
    if (selectAllCheckbox) {
      pm.currentSelection = Array(pm.partyPostsList.length).fill(false);
    } else {
      pm.currentSelection = Array(pm.partyPostsList.length).fill(true);
    }

    setSelectAllCheckbox(e.target.checked);
  };
  const handleSelectionChange = (index: number, newVal: boolean) => {
    let newCurrentSelection = [...pm.currentSelection];
    newCurrentSelection[index] = newVal;
    pm.currentSelection = newCurrentSelection;

    pm.onSelectionChanged();
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectAllCheckbox}
              onChange={handleSelectAll}
            />
          </th>
          <th>Sport Name</th>
          <th>Current Signups</th>
          <th>Max Limit</th>
          <th>Meeting Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pm.partyPostsList.map((post: PartyPost, index: number) => (
          <PartyPostsListItem
            key={post.id}
            post={post}
            selectionValue={pm.currentSelection[index]}
            onSelectionChange={(newVal) => {
              handleSelectionChange(index, newVal);
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
