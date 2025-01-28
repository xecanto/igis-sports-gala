from django.db import models
from apps.users.models import CustomUser
from apps.teams.models import Team

# Create your models here.

class Bid(models.Model):
    player = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='bids')
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='bids')
    amount = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_winning_bid = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.team.name} bid {self.amount} for {self.player.email}"

class BiddingSession(models.Model):
    is_active = models.BooleanField(default=False)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)
    total_points = models.IntegerField(default=0)

    def __str__(self):
        return f"Bidding Session {'Active' if self.is_active else 'Inactive'}"
