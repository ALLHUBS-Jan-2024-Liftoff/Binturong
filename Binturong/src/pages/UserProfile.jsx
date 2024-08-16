//Start of the User Profile page

const UserProfile = () => {
    const[loyaltyScore, setLoyaltyScore] = useState(0);

    useEffect(() => {
        const fetchLoyaltyScore = async() =>{
            try {
                const response = await fetch('http://localhost:8080/loyalty-score?user_id=1');
                const data = await response.json();
                setLoyaltyScore(data.total_score);
            } catch(error){
             console.error('Error fetching loyalty score:', error);

          }

        };

    fetchLoyaltyScore();
    }, []); // Empty dependency array means this useEffect runs only once, after the component mounts



    return (
        <div>

                    <h1>User Profile</h1>;
                    <h3>Thank you for your contribution!</h3>
                    <h3>Your Loyalty Score is: {loyaltyScore} </h3>


                </div>
    )

  };
  
  export default UserProfile;
  