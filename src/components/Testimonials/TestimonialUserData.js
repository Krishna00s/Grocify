import axios from 'axios'
const fetchUsers = async () => {
    try {
        const resUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = resUsers.data
        const feedbacks = [
            {
                occupation: "Chef",
                rating: "★★★★★",
                feedback: "As a chef, ingredient quality is everything for me. The vegetables were incredibly fresh and looked like they were picked the same day. Delivery came early in the morning, which made it super convenient for prep and daily cooking."
            },
            {
                occupation: "Food Blogger",
                rating: "★★★★★",
                feedback: "As a food blogger, presentation and freshness matter a lot. The fruits were perfectly ripe, vibrant, and neatly packed. It really helped in creating high-quality content and the taste matched the visuals perfectly."
            },
            {
                occupation: "Restaurant Owner",
                rating: "★★★★☆",
                feedback: "Running a restaurant means consistency is key. The vegetables and dairy products I ordered were fresh and reliable. Timely deliveries help keep kitchen operations smooth during peak hours."
            },
            {
                occupation: "Nutritionist",
                rating: "★★★★★",
                feedback: "As a nutritionist, I always look for clean and fresh food sources. The fruits and vegetables here feel naturally fresh and of great quality, making it easier to recommend healthy choices to clients."
            },
            {
                occupation: "Fitness Trainer",
                rating: "★★★★☆",
                feedback: "As a fitness trainer, I rely on quality food for diet plans. The meat and dairy products were fresh and properly packed, helping maintain proper nutrition without worrying about quality."
            },
            {
                occupation: "Home Chef",
                rating: "★★★★★",
                feedback: "Cooking daily requires fresh and reliable ingredients. Everything from vegetables to dairy was top-notch. The delivery was quick, and packaging kept everything in perfect condition."
            },
            {
                occupation: "Hotel Manager",
                rating: "★★★★☆",
                feedback: "Managing a hotel requires dependable suppliers. The quality of groceries is consistent and deliveries are always on time, which helps maintain a good standard of service."
            },
            {
                occupation: "Working Professional",
                rating: "★★★★★",
                feedback: "With a busy schedule, I need something quick and reliable. This service delivers fresh groceries on time, and the quality has been consistently good. It saves a lot of time and effort."
            },
            {
                occupation: "Seafood Vendor",
                rating: "★★★★☆",
                feedback: "Being in the seafood business myself, I can tell when something is fresh. The seafood quality here is impressive, hygienic, and handled properly. It meets professional expectations."
            },
            {
                occupation: "Lifestyle Influencer",
                rating: "★★★★★",
                feedback: "As a lifestyle influencer, I focus on quality and experience. The groceries were fresh, well-packaged, and visually appealing. It’s a service I’d confidently recommend to others."
            }
        ];

        const combined = data.map(user => {
            return {
                ...user,
                image: `https://i.pravatar.cc/150?img=${user.id}`,
                testimonial: feedbacks[user.id - 1]
            }
        })
        return combined;

    } catch (err) {
        console.log(err);
        return [];
    }
}


export default fetchUsers