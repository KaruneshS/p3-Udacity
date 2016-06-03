from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from database_setup import Base, Category, CategoryItem

engine = create_engine('sqlite:///category.db')
# Bind the engine to the metadata of the Base class so that the
# declaratives can be accessed through a DBSession instance
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
# A DBSession() instance establishes all conversations with the database
# and represents a "staging zone" for all the objects loaded into the
# database session object. Any change made against the objects in the
# session won't be persisted into the database until you call
# session.commit(). If you're not happy about the changes, you can
# revert all of them back to the last commit by calling
# session.rollback()
session = DBSession()


# Catalog for Android
Category1 = Category(name="Android")

session.add(Category1)
session.commit()

catItem11 = CategoryItem(name="Lollipop", description="Android Lollipop is a version of the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1. Unveiled on June 25, 2014, during the Google I/O conference, it became available through official over-the-air (OTA) updates on November 12, 2014, for select devices that run distributions of Android serviced by Google (such as Nexus and Google Play edition devices). Its source code was made available on November 3, 2014.",
                     cat_id=1)

session.add(catItem11)
session.commit()


catItem12 = CategoryItem(name="KitKat", description="Android 4.4 KitKat is a version of the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4. Unveiled on September 3, 2013, KitKat focused primarily on optimizing the operating system for improved performance on entry-level devices with limited resources. Edit.",
                     cat_id=1)

session.add(catItem12)
session.commit()

catItem13 = CategoryItem(name="Jelly Bean", description="Android Jelly Bean is the name given to three major point releases of the Android mobile operating system developed by Google, spanning versions between 4.1 and 4.3.1.",
                     cat_id=1)

session.add(catItem13)
session.commit()

catItem14 = CategoryItem(name="Marshmallow", description="Android 6.0 Marshmallow is the eighth major version of the Android operating system. First unveiled in May 2015 at Google I/O under the codename Android M, it was officially released in October 2015.",
                     cat_id=1)

session.add(catItem14)
session.commit()

# Catalog for iOS
Category2 = Category(name="iOS")

session.add(Category2)
session.commit()

catItem21 = CategoryItem(name="iOS 7", description="iOS 7 is the seventh major release of the iOS mobile operating system designed by Apple Inc. and successor of iOS 6. It was announced at the Worldwide Developers Conference (WWDC) on June 10, 2013, and was released on September 18, 2013. iOS 7 features a completely redesigned user interface, a design credited to a team led by Apple SVP of design Jony Ive.",
                     cat_id=2)

session.add(catItem21)
session.commit()


catItem22 = CategoryItem(name="iOS 8", description="iOS 8 is the eighth major release of the iOS mobile operating system designed by Apple Inc. as the successor to iOS 7. It was announced at the Worldwide Developers Conference (WWDC) 2014 on June 2, 2014, and was released on September 17, 2014.",
                     cat_id=2)

session.add(catItem22)
session.commit()

catItem23 = CategoryItem(name="iOS 9", description="iOS 9 is the ninth major release of iOS, the mobile operating system by Apple Inc. It is the successor to iOS 8 and focuses less on new features and more on under-the-hood optimizations, as well as battery improvements.",
                     cat_id=2)

session.add(catItem23)
session.commit()

# Catalog for WindowsPhone
Category3 = Category(name="WindowsPhone")

session.add(Category3)
session.commit()

catItem31 = CategoryItem(name="Windows Phone 7", description="Windows Phone 7 was the first release of the Windows Phone mobile client operating system, released worldwide on October 21, 2010, and in the United States on November 8, 2010.",
                     cat_id=3)

session.add(catItem31)
session.commit()


catItem32 = CategoryItem(name="Windows Phone 8", description="Windows Phone 8 is the second generation of the Windows Phone mobile operating system from Microsoft. It was released on October 29, 2012, and like its predecessor, it features a flat user interface based on Metro design language. It was succeeded by Windows Phone 8.1, which was unveiled on April 2, 2014.",
                     cat_id=3)

session.add(catItem32)
session.commit()

catItem33 = CategoryItem(name="Windows 10 Mobile", description="Windows 10 Mobile was announced on January 21, 2015, as a mobile operating system for smartphones and tablets with screens smaller than 8 inches, with the first build released on February 12, 2015.",
                     cat_id=3)

session.add(catItem33)
session.commit()

print "added cat items!"
