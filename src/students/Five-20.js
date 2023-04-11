const students = [
  { name: "Adam Bazzi", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Aileen Kim", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Anton Do", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Ardian Kovanxhi", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Brennan Cota", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Brian Khoo", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Christian Lee", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Clarence Ma", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Eli Foster", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Eunice Park", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Gal Atias", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Grace Cizma", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Hamilton Truong", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "James (xinbo) (James) Zhou", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Jason Allen", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Jason Greenberg", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "John Cruz", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Jordan Blancaflor", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Kenny (Ken) Leong", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Kyle Parkin", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Le Nguyen", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Leandro Figueiredo", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Marcus Kim", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Nathan Heinz", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Nicholas (Nick) Arakaki", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Nicholas (Nick) Murphy", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Nygil Nettles", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Patrick Mckinney", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Ruidan (Meredith) Zhang", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Ryan Goggin", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Sameh Fazli", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Sarah Nodwell", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Sean Baeyens", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Shana Edouard", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Tony Vongvone", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Troy Lee", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Tuan Tran", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Vian Khachatourian", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Vusal Layijov", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Ye Lwin (Will) Htay", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Yue Hao", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Zaineb Marediya", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},
  { name: "Zakariya (Zak) Beg", imageUrl: "https://secure.gravatar.com/avatar/98c1fae036933fa8b3777b95d3bc35aa?secure=true&size=300"},

];

export default students;
