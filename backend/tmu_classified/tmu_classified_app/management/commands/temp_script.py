from django.core.management.base import BaseCommand
from tmu_classified_app.models import User, Ad, UserAdRelation
import uuid
import random

class Command(BaseCommand):
    help = 'Creates fake data for testing'

    def handle(self, *args, **options):
        # List of cities
        cities = ['Toronto', 'Scarborough', 'Mississauga', 'North York', 'Etobicoke']

        # List of categories
        categories = ['Items Wanted', 'Items for Sale', 'Academic Services']

        # List of subcategories
        subcategories = ['Tutoring', 'Cell Phone', 'Car', 'Furniture']

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
            for _ in range(5):
                # Choose random city, category, and subcategory
                city = random.choice(cities)
                category = random.choice(categories)
                subcategory = random.choice(subcategories)

                # Generate fake data for each field
                ad_id = uuid.uuid4()
                title = f"{category}: {subcategory}"
                description = f"A {subcategory} for sale in {city}."
                price = random.randint(1, 500)

                # Create a new Ad instance with the fake data
                ad = Ad(
                    ad_id=ad_id,
                    title=title,
                    description=description,
                    category=category,
                    sub_category=subcategory,
                    price=price,
                    city=city,
                )
                ad.save()

                # Create a new UserAdRelation instance for the user and the ad
                user_ad_relation = UserAdRelation(
                    user=user,
                    ad=ad,
                )
                user_ad_relation.save()
