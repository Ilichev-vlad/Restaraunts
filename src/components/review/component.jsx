export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>REVIEWS</h3>
            <div>
                {
                    reviews?.length 
                    ? <ul>{reviews.map(({user, text}) => <li>{user}: {text}</li>)}</ul>
                    : 'Review is empty'
                }
            </div>
        </div>
    );
}