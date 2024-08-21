import { IndividualComment } from "./IndividualComment";


export const AllComments = ({comments, deleteComment}) => {
    return(

        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Text</th>
            <th scope="col">File</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <IndividualComment key={comment.id} comment={comment}  deleteComment={deleteComment}/>
          ))}
        </tbody>
      </table>





    );
};