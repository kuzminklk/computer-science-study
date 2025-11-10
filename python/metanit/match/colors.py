
color = {"color":"green"}

match color:
    case {"color":"red"|"redish", **rest}:
        print("RED!")
    case {"color":"green"|"greenish", **rest}:
        print("GREEN!")
    case _:
        print("Hmm")