import React, { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { FormState } from "../interfaces/CreateLink.form.interface";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_LINK_MUTATION } from "../graphql/mutations/CREATE_LINK_MUTATION";
import { FEED_QUERY } from "../graphql/queries/FEED_QUERY";

const CreateLink = () => {
  const [formState, setFormState] = useState<FormState>({
    description: "",
    url: "",
  });
  const navigate = useNavigate();
  const { url, description } = formState;
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    update: (cache, { data: post }) => {
      const feed: any = cache.readQuery({
        query: FEED_QUERY,
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            id: "This is terrible technology part 2",
            links: [post, ...feed?.feed.links],
            count: 1,
          },
        },
      });
    },
    onCompleted: () => navigate("/"),
  });

  return (
    <div>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
