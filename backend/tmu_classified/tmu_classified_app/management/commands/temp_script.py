from django.core.management.base import BaseCommand
from tmu_classified_app.models import User, Ad, UserAdRelation
from django.core.files import File
import uuid
import os
import random

class Command(BaseCommand):
    help = 'Creates fake data for testing'

    def handle(self, *args, **options):
        # Delete all instances of the models
        User.objects.all().delete()
        Ad.objects.all().delete()
        UserAdRelation.objects.all().delete()

        ad1 = {"title":"phone",
                "description":"Phone for sale",
                "category":"Items for Sale",
                "sub_category":"Cell Phone",
                'image':"/phoneforsale.jpg"}
        
        ad8 = {"title":"phone",
                "description":"Phone",
                "category":"Items Wanted",
                "sub_category":"Cell Phone",
                'image':"/phoneforsale.jpg"}
        
        ad2 = {"title":"car",
        "description":"car for sale",
        "category":"Items for Sale",
        "sub_category":"Car",
        'image':"/carforsale.jpg"}

        ad9 = {"title":"1992 chevey car ",
        "description":"car that i want",
        "category":"Items Wanted",
        "sub_category":"Car",
        'image':"/carforsale.jpg"}

        ad3 = {"title":"iphone new great condition",
        "description":"brand new iphone",
        "category":"Items for Sale",
        "sub_category":"Cell Phone",
        'image':"/iphone.png"}

        ad10 = {"title":"iphone new great condition",
        "description":"brand new iphone",
        "category":"Items Wanted",
        "sub_category":"Cell Phone",
        'image':"/iphone.png"}

        ad4 = {"title":"textbook new great condition",
        "description":"physics or something",
        "category":"Items for Sale",
        "sub_category":"Textbook",
        'image':"/textbookforsale.jpg"}

        ad5 = {"title":"textbook old bad condition",
        "description":"do not study this",
        "category":"Items for Sale",
        "sub_category":"Textbook",
        'image':"/textbookforsale2.jpg"}

        ad11 = {"title":"Lookinh for: textbook old bad condition",
        "description":"i really want it",
        "category":"Items Wanted",
        "sub_category":"Textbook",
        'image':"/textbookforsale2.jpg"}

        ad6 = {"title":"car old bad condition",
        "description":"do not drive this",
        "category":"Items for Sale",
        "sub_category":"Car",
        'image':'/carforsale2.jpg'}

        ad7 = {"title":"fake phone for pranks",
        "description":"this is not a real phone",
        "category":"Items for Sale",
        "sub_category":"Cell Phone",
        'image':'/phoneforsale2.jpg'}

        ad12 = {"title":"WANTED: fake phone for pranks",
        "description":"this is not a real phone",
        "category":"Items Wanted",
        "sub_category":"Cell Phone",
        'image':'/phoneforsale2.jpg'}

        ad13 = {"title":"TUTOR: for studying and stuff",
        "description":"i will teach u everything",
        "category":"Academic Services",
        "sub_category":"Tutoring",
        'image':'/textbookforsale.jpg'}

        ad14 = {"title":"TUTOR: i will not teach u dont hire me",
        "description":"i will teach not u everything",
        "category":"Academic Services",
        "sub_category":"Tutoring",
        'image':'/textbookforsale2.jpg'}

        ad15 = {"title":"TOTALLY REAL CHEATING: I will do ur exams",
        "description":"i am not a prof i promise i legally have to tell you",
        "category":"Academic Services",
        "sub_category":"Tutoring",
        'image':'/textbookforsale2.jpg'}

        ads = [ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9, ad10, ad11, ad12,  ad13, ad14, ad15]

        # List of cities
        cities = ['Toronto', 'Scarborough', 'Mississauga', 'North York', 'Etobicoke']

        # List of usernames
        usernames = ['user1', 'user2', 'user3', 'user4', 'user5']

        # List of emails
        emails = ['user1@example.com', 'user2@example.com', 'user3@example.com', 'user4@example.com', 'user5@example.com']

        # Generate data for 5 users
        for i in range(5):
            # Generate fake data for each field
            userID = uuid.uuid4()
            email = emails[i]
            username = usernames[i]
            password = 'password123'

            # Create a new User instance with the fake data
            user = User(
                userID=userID,
                email=email,
                username=username,
            )
            user.set_password(password)
            user.save()

            # For each user, create 5 ads
            for _ in range(7):
                # Choose random city, category, subcategory, and image
                chosenad = random.choice(ads)
                city = random.choice(cities)
                category = chosenad["category"]
                subcategory = chosenad["sub_category"]
                image_filename = chosenad["image"]

                # Generate fake data for each field
                ad_id = uuid.uuid4()
                title = chosenad["title"]
                description = chosenad["description"]
                price = random.randint(1, 500)

                
                ad = Ad(
                    ad_id=ad_id,
                    title=title,
                    description=description,
                    category=category,
                    sub_category=subcategory,
                    price=price,
                    city=city,
                    image=image_filename,
                )
                ad.save()

                # Create a new UserAdRelation instance for the user and the ad
                user_ad_relation = UserAdRelation(
                    user=user,
                    ad=ad,
                )
                user_ad_relation.save()
