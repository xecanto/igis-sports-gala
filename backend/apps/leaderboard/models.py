from django.db import models
from apps.teams.models import Team

class Leaderboard(models.Model):
    team = models.OneToOneField(Team, on_delete=models.CASCADE, related_name='leaderboard')
    points = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.team.name} - {self.points} points"
