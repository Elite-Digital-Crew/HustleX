const courcesData = [
    {
       id : 1,
        title : "ABS",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmz6tAH4CzjZfQNW1tsPFa9fhn_8kGslUng&usqp=CAU',
        description : "A strong core acts as the foundation to help you crush every other workout, Start with this beginner ab workout, then work your way up to challenge your abs in new and increasingly intense ways.",
        difficulty : 1,
        Units: 9 ,
        data : [
            {exercise:"Jumping Jacks",
            TorC:"30s"},
        
            {exercise:"Abdominal Crunches",
            TorC:"12x"},
            
            {exercise:"Russia twist",
            TorC:"16x"},
            
            {exercise:"Mountain Climbers",
            TorC:"12x"},
            
            {exercise:"plank",
            TorC:"15s"},
            
            {exercise:"Mountain Climbers",
            TorC:"12x"},
            
            {exercise:"Abdominal crunches",
            TorC:"8x"},
            
            {exercise:"Russian twist",
            TorC:"14x"},
            
            {exercise:"Cobra stretch",
            TorC:"30s"},
        ]       
    },
 
 //2
 {
    id : 2,
    title : "ABS",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklffqZS72VzFpo1JAgt-f2lDXHIw2Bh4JtQ&usqp=CAU',
    description : "This abs and core workout involves a variety of exercises designed to strengthen the rectus abdominis, obliques, transverse abdominis, and erector​​ spinae. ",
    difficulty : 2,
    Units: 13,
    data : [
       {exercise:"Jumping Jacks",
       TorC:"30s"},
 
       {exercise:"Abdominal Crunches",
       TorC:"14x"},
 
       {exercise:"Crossover Crunch",
       TorC:"10x"},
 
       {exercise:"Mountain Climbers",
       TorC:"16x"},
 
       {exercise:"Bicycle Crunches",
       TorC:"8x"},
 
       {exercise:"Leg raise",
       TorC:"6x"},
 
       {exercise:"plank",
       TorC:"20s"},
 
       {exercise:"Abdominal crunches",
       TorC:"14x"},
 
       {exercise:"Mountain Climbers",
       TorC:"16x"},
 
       {exercise:"Crunches",
       TorC:"8x"},
 
       {exercise:"Side plank Right",
       TorC:"15x"},
 
       {exercise:"Side plank Left",
       TorC:"15x"},
 
       {exercise:"Cobra stretch",
       TorC:"30s"},
    ]
 },
 
 //3
 {
    id : 3,
    title : "ABS",
    image : 'data:image/jpeg;base64,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',
    description : "Before you launch into the advanced ab workout, you will want to ease into it with some basic core exercises to warm up the abdominal muscles. A plank is a great way to begin.",
    difficulty : 3,
    Units: 15,
    data :[ 
          {exercise:"Jumping Jacks",
          TorC:"30s"},
 
          {exercise:"Abdominal Crunches",
          TorC:"16x"},
 
          {exercise:"Crossover Crunch",
          TorC:"12x"},
 
          {exercise:"Mountain Climbers",
          TorC:"16x"},
 
          {exercise:"Bicycle Crunches",
          TorC:"12x"},
 
          {exercise:"Pushup & Rotation",
          TorC:"12x"},
 
          {exercise:"Crunches",
          TorC:"12x"},
          
          {exercise:"Leg raise",
          TorC:"8x"},
 
          {exercise:"plank",
          TorC:"40s"},
 
          {exercise:"Abdominal crunches",
          TorC:"16x"},
 
          {exercise:"Mountain Climbers",
          TorC:"16x"},
 
          {exercise:"Crunches",
          TorC:"12x"},
 
          {exercise:"Side plank Right",
          TorC:"15x"},
 
          {exercise:"Side plank Left",
          TorC:"15x"},
 
          {exercise:"Cobra stretch",
          TorC:"30s"},
    ]
 },
 
 //4
 {
    id : 4,
    title : "Arms",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBrdFuQgotWdessZKwziJBIkUGsnyZxKjRg&usqp=CAU',
    description : "The key to getting bigger biceps and triceps is to strengthen these muscles as much as possible. The best arm workouts for mass are the ones that make you stronger.",
    difficulty : 2,
    Units: 16,
    data :[
        {exercise:"Arm raise",
        TorC:"30s"},

        {exercise:"Floor tricep dips",
        TorC:"12x"},

        {exercise:"Pushup and rotation",
        TorC:"8x"},

        {exercise:"Tricep dips",
        TorC:"14x"},

        {exercise:"Incline pushup",
        TorC:"14x"},

        {exercise:"Pushup",
        TorC:"10x"},

        {exercise:"Diamond pushup",
        TorC:"8x"},

        {exercise:"Tricep stretch left",
        TorC:"20s"},

        {exercise:"Tricep stretch right",
        TorC:"20s"},

        {exercise:"Jumping jacks",
        TorC:"30s"},

        {exercise:"Burpees",
        TorC:"8x"},

        {exercise:"Pushup",
        TorC:"10x"},

        {exercise:"Tricep dips",
        TorC:"14x"},

        {exercise:"Incline pushup",
        TorC:"12x"},

        {exercise:"Jumping Jacks",
        TorC:"30s"},

        {exercise:"Plank",
        TorC:"30s"}
    ]
 },
 
 //5
 {
    id : 5,
    title : "Height Increase",
    image : 'https://heightincreasecoach.com/wp-content/themes/heightincreasecoach/assets/images/kid.jpg',
    description : "Wondering how to increase height fast after 18? Is increasing the height a big deal? Not really! It is all about removing the decompressions on the vertebrae which are developed over time due to gravity and poor posture habits.",
    difficulty : 3,
    Units: 18,
    data :[ 
        {exercise:"Dry Land Swim",
        TorC:"20s"},

        {exercise:"Pelvic Shift",
        TorC:"30s"},

        {exercise:"Cobra Stretch",
        TorC:"30s"},

        {exercise:"The Bow Down",
        TorC:"20s"},

        {exercise:"Forward Bend",
        TorC:"14x"},

        {exercise:"Spot Jump",
        TorC:"120s"},

        {exercise:"Hands On The Head Bow Down",
        TorC:"8s"},

        {exercise:"Standing Vertical Stretch",
        TorC:"30s"},

        {exercise:"Super Stretch",
        TorC:"15s"},

        {exercise:"Wall Stretch",
        TorC:"6s"},

        {exercise:"Straight Legs Up",
        TorC:"5s"},

        {exercise:"Two Straight Legs Up",
        TorC:"3s"},

        {exercise:"Downhill",
        TorC:"6s"},

        {exercise:"Inversion Table",
        TorC:"30s"},

        {exercise:"The Plank",
        TorC:"10s"},

        {exercise:"Ankle Weights",
        TorC:"10x"},

        {exercise:"Alternate Leg Kick",
        TorC:"30s"},

        {exercise:"Leg Kick",
        TorC:"30s"},
    ]
 },
 
 //6
 {
    id : 6,
    title : "Fat burner",
    image : 'https://divinitynutra.com/wp-content/uploads/turmeric-weight-loss.jpg ',
    description : "When many people think of losing weight, one of the first things that comes to mind is getting a totally toned and taut tummy. After all, who doesn't want to be able to slip into a pair of jeans without having to deal with a muffin top? Plus, losing belly fat is a surefire way to improve your health",
    difficulty : 1,
    Units: 6,
    data :[
        {exercise:"plank",
        TorC:"30s"},

        {exercise:"bicycle crunches",
        TorC:"14x"},

        {exercise:"The russian twist",
        TorC:"14x"},

        {exercise:"Push up",
        TorC:"10x"},

        {exercise:"Reverse crunches",
        TorC:"15x"},

        {exercise:"Mountain climbers",
        TorC:"60s"}
    ]
 },
 
 //mini works
 {
    id : 7,
    title : "warm up",
    image : 'https://img1.goodfon.com/wallpaper/nbig/8/85/warm-up-stretching-women.jpg ',
    description : "If you’re short on time, you may feel tempted to skip a warmup and jump right into your workout. But doing so can increase your risk of injury, and put more strain on your muscles",
    difficulty : 3,
    Units: 9,
    data :[
          {exercise:"Arm Reach",
          TorC:"60s"},
 
          {exercise:"Side Reach",
          TorC:"60s"},
 
          {exercise:"Hip Rotations",
          TorC:"30s"},
 
          {exercise:
          "Knees Lift",
          TorC:"30s"},
 
          {exercise:"Lateral Lunge with Balance",
          TorC:"60s"},
 
          {exercise:"Squat To Raised Heel",
          TorC:"60s"},
 
          {exercise:"Squat With Reach",
          TorC:"30s"},
 
          {exercise:"Plank Walk Out",
          TorC:"60s"},
 
          {exercise:"Jumping Jack",
          TorC:"60s"}
        ]
 },
];

export default courcesData;