from zipfile import ZipFile, ZIP_DEFLATED

with ZipFile("archive.zip", "a", compression=ZIP_DEFLATED, compresslevel=3) as myzip:
    # myzip.write("text.txt", "text2.txt")
    # for item in myzip.infolist():
    #    print(f"File Name: {item.filename} Date: {item.date_time} Size: {item.file_size}")
    # Also myzip.getinfo("text.t")
    # myzip.extractall(path="extract")
    # Or myzip.extract("hello.txt")
    # Also myzip.read("hello5.txt")
    with myzip.open("text3.txt", "w") as file:
        encoded_str = bytes("Python...", "UTF-8")
        file.write(encoded_str)