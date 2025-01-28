from django.db import models
from apps.users.models import CustomUser
from apps.teams.models import Team

class Game(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    points = models.IntegerField(default=0)  # Points managed by admin
    rules = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class TeamGameStats(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='game_stats')
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='team_stats')
    points_earned = models.IntegerField(default=0)
    matches_played = models.IntegerField(default=0)
    matches_won = models.IntegerField(default=0)
    matches_lost = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.team.name} - {self.game.name} - {self.points_earned} points"
